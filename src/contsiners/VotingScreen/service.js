import firebase from "firebase";
import { dbFireStore } from "../../../firebaseConfig";

class VotingPageService {

  getVotingProtocols = () => {
    try {
      return dbFireStore
        .collection("protocols")
        .where("status", "==", "voting")
        .get()
        .then((doc) => {
          const allSuitableDocs = [];
          doc.forEach((doc) => allSuitableDocs.push(doc.data()));
          return allSuitableDocs;
        });
    } catch (error) {
      console.log(error);
    }
  };

  setVotingResult = (cardId, votingActionParam, userId, collection) => {
    try {
      const voteResults = dbFireStore
        .collection(`${collection}`)
        .doc(`${cardId}`);
      voteResults.update({
        [votingActionParam]: firebase.firestore.FieldValue.arrayUnion(userId),
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export default new VotingPageService();
