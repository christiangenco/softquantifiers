const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { FieldValue } = require("firebase-admin/firestore");

admin.initializeApp();

const db = admin.firestore();

exports.updateQuantifiers = functions.firestore
  .document("responses/{responseId}")
  // .onWrite(async (snap, context) => {
  //   const response = snap.after.data();
  .onCreate(async (snap, context) => {
    const response = snap.data();

    const batch = db.batch();
    Object.entries(response.responses).forEach(
      ([quantifierId, { largest, mostLikely, smallest }]) => {
        const quantifierRef = db.collection("quantifiers").doc(quantifierId);

        // batch.update(quantifierRef, {
        //   updatedAt: new Date(),
        //   [`mostLikely.${mostLikely}`]: FieldValue.increment(1),
        //   [`smallest.${smallest}`]: FieldValue.increment(1),
        //   [`largest.${largest}`]: FieldValue.increment(1),
        // });
        batch.set(
          quantifierRef,
          {
            updatedAt: new Date(),
            mostLikely: {
              [mostLikely]: FieldValue.increment(1),
            },
            largest: {
              [largest]: FieldValue.increment(1),
            },
            smallest: {
              [smallest]: FieldValue.increment(1),
            },
          },
          { merge: true },
        );
      },
    );
    await batch.commit();
  });
