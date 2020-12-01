// import { graphql } from 'gatsby';
// import { conferenceSpeakers } from './src/data/conferenceSpeakers';

// async function transformsConferenceDataToNodes({
//   actions,
//   createNodeId,
//   createContentDigest,
// }) {
//   // eslint-disable-next-line no-plusplus
//   for (let i = 0; i < conferenceSpeakers.length; i++) {
//     const speaker = conferenceSpeakers[i];
//     const { data } = await graphql(``);
//     const nodeMeta = {
//       id: createNodeId(`speaker-${speaker.id}`),
//       parent: null,
//       children: [],
//       internal: {
//         type: 'speaker',
//         mediaType: 'application/json',
//         contentDigest: createContentDigest(speaker),
//       },
//     };
//     actions.createNode({
//       ...speaker,
//       ...nodeMeta,
//     });
//   }
// }

// export async function sourceNodes(params) {
//   await Promise.all([transformsConferenceDataToNodes(params)]);
// }
