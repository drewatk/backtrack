import nodegit, { Repository } from 'nodegit';

import { gitConstants, projConstants } from '../constants';

const { AUTHOR, EMAIL, HEAD_REF } = gitConstants;

/**
 * Adds changes made to a file to the index, stages them, and makes a commit with the provided message.
 * @param {nodegit.Repository} repo
 * @param {String} commitMessage
 *
 * @return {Promise} then(commitId), catch(error)
 */
const addAndCommit = (repo: nodegit.Repository, commitMessage: string) => {
  return new Promise(resolve => {
    let index = null,
      oid = null;

    /* file to commit */
    const filename = projConstants.EDIT_FILE;

    repo
      .refreshIndex()
      .then(indexResult => {
        index = indexResult;
      })
      .then(() => index.addByPath(filename))
      .then(() => index.write())
      .then(() => {
        // writes index into file tree, retuning the OID(SHA hash)
        return index.writeTree();
      })
      .then(oidResult => {
        oid = oidResult;
        return nodegit.Reference.nameToId(repo, HEAD_REF);
      })
      .then(head => repo.getCommit(head))
      .then(parent => {
        /* add commit details */
        const author = nodegit.Signature.now(AUTHOR, EMAIL);
        const committer = nodegit.Signature.now(AUTHOR, EMAIL);

        return repo.createCommit(
          HEAD_REF,
          author,
          committer,
          commitMessage,
          oid,
          [parent]
        );
      })
      .then(commitId => resolve(commitId))
      .catch(e => {
        throw new Error(`git.addAndCommit: ${e}`);
      });
  });
};

export default addAndCommit;
