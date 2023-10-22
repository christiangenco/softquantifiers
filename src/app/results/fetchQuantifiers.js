import { cache } from "react";
import firestore from "@/firestore";

// revalidate the data at most every hour
export const revalidate = 3600;

export default cache(async () => {
  const quantifiersRef = firestore.collection("quantifiers");
  const quantifiersSnapshot = await quantifiersRef.get();
  return quantifiersSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
});
