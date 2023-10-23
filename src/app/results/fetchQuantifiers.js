import { cache } from "react";
import firestore from "@/firestore";

export const revalidate = 300;

export default cache(async () => {
  const quantifiersRef = firestore.collection("quantifiers");
  const quantifiersSnapshot = await quantifiersRef.get();
  return quantifiersSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
});
