import { dbFireStore } from "../../../firebaseConfig";

class ProtocolsPageService {
  getFilteredProtocols = async (
    basicFilterName,
    advancedFilterName,
    advancedFilterValue,
    collectionName,
    userId
  ) => {
    try {
      if (basicFilterName && !advancedFilterName) {
        return await this.getFilteredProtocolsBasic(
          basicFilterName,
          collectionName,
          userId
        );
      }
      if (advancedFilterName) {
        return await this.getFilteredProtocolsAdvanced(
          basicFilterName,
          advancedFilterName,
          advancedFilterValue,
          collectionName,
          userId
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  getFilteredProtocolsBasic = (basicFilterName, collectionName, userId) => {
    if (basicFilterName === "all") {
      return dbFireStore
        .collection(`${collectionName}`)
        .get()
        .then((doc) => {
          const allSuitableDocs = [];
          doc.forEach((doc) => allSuitableDocs.push(doc.data()));
          return allSuitableDocs;
        });
    }
    if (basicFilterName === "inDiscussion") {
      return this.getFilteredProtocolsByBasicFilter(
        "status",
        "inDiscussion",
        collectionName
      );
    }
    if (basicFilterName === "accepted") {
      return this.getFilteredProtocolsByBasicFilter(
        "result",
        "accepted",
        collectionName
      );
    }
    if (basicFilterName === "rejected") {
      return this.getFilteredProtocolsByBasicFilter(
        "result",
        "rejected",
        collectionName
      );
    }
    if (basicFilterName === "myProposals") {
      return this.getFilteredProtocolsByBasicFilter(
        "author",
        userId,
        collectionName
      );
    }
    if (basicFilterName === "anotherTenantProposals") {
      return this.getAnotherTenantProposalsByBasicFilter(
        userId,
        collectionName
      );
    }
  };

  getAnotherTenantProposalsByBasicFilter = async (userId, collectionName) => {
    const allProposals = await dbFireStore
      .collection(`${collectionName}`)
      .get()
      .then((doc) => {
        const allSuitableDocs = [];
        doc.forEach((doc) => allSuitableDocs.push(doc.data()));
        return allSuitableDocs;
      });
    return allProposals.filter((item) => item.author !== userId);
  };

  getProposalsByUserId = (fieldName, userId, collectionName) => {
    return dbFireStore
      .collection(`${collectionName}`)
      .where(`${fieldName}`, "array-contains", `${userId}`)
      .get()
      .then((doc) => {
        const allSuitableDocs = [];
        doc.forEach((doc) => allSuitableDocs.push(doc.data()));
        return allSuitableDocs;
      });
  };

  getFilteredProtocolsByBasicFilter = (
    searchFieldDB,
    searchValueDB,
    collectionName
  ) => {
    return dbFireStore
      .collection(`${collectionName}`)
      .where(`${searchFieldDB}`, "==", `${searchValueDB}`)
      .get()
      .then((doc) => {
        const allSuitableDocs = [];
        doc.forEach((doc) => allSuitableDocs.push(doc.data()));
        return allSuitableDocs;
      });
  };

  filterValueByBasicFilterName = (basicFilterName, value, userId) => {
    let result = value;
    
    if (
      value.length > 0 &&
      basicFilterName &&
      basicFilterName !== "all" &&
      basicFilterName !== "anotherTenantProposals" &&
      basicFilterName !== "myProposals"
    ) {
      result = value.filter((item) => item.result === basicFilterName);
    }
    if (
      value.length > 0 &&
      basicFilterName &&
      basicFilterName === "anotherTenantProposals"
    ) {
      result = value.filter((item) => item.author !== userId);
    }
    if (
      value.length > 0 &&
      basicFilterName &&
      basicFilterName === "myProposals"
    ) {
      result = value.filter((item) => item.author === userId);
    }
    return result;
  };

  getFilteredProtocolsByDate = (
    basicFilterName,
    dateField,
    date,
    collectionName,
    userId
  ) => {
    const dateInMillisec =
      typeof date !== "number" ? Date.parse(date) : date;

    return dbFireStore
      .collection(`${collectionName}`)
      .where(`${dateField}`, "==", dateInMillisec)
      .get()
      .then((doc) => {
        const allSuitableDocs = [];
        doc.forEach((doc) => allSuitableDocs.push(doc.data()));
        return this.filterValueByBasicFilterName(
          basicFilterName,
          allSuitableDocs,
          userId
        );
      });
  };

  getFilteredProtocolsByText = (
    basicFilterName,
    advancedFilterName,
    advancedFilterValue,
    collectionName,
    userId
  ) => {
   
    return dbFireStore
      .collection(`${collectionName}`)
      .get()
      .then((doc) => {
        const allSuitableDocs = []; 
        
        doc.forEach((doc) => allSuitableDocs.push(doc.data()));
        const sortedSuitableDocs = allSuitableDocs.filter((item) => {
          const searchParam = item[advancedFilterName];
          return (String(searchParam)).includes(advancedFilterValue);
        })
        return this.filterValueByBasicFilterName(
          basicFilterName,
          sortedSuitableDocs,
          userId
        );
      });
  };

  getFilteredProtocolsAdvanced = (
    basicFilterName,
    advancedFilterName,
    advancedFilterValue,
    collectionName,
    userId
  ) => {
    if (advancedFilterName === "createDate") {
      return this.getFilteredProtocolsByDate(
        basicFilterName,
        advancedFilterName,
        advancedFilterValue,
        collectionName,
        userId
      );
    } else {
      return this.getFilteredProtocolsByText(
        basicFilterName,
        advancedFilterName,
        advancedFilterValue,
        collectionName,
        userId
      );
    }
  };

  setControlResult = (cardId, controlActionParam, voteParams) => {
    try {
      const controlResults = dbFireStore.collection("protocols").doc(`${cardId}`);
      if (controlActionParam === "agrees") {
        controlResults.update({
          status: "passedVoting",
          result: voteParams.result,
          voteStatistic: voteParams.statistic
        });
      }
      if (controlActionParam === "against") {
        controlResults.update({
          status: "delete",
          result: "hold",
        });
      }
      if (controlActionParam === "abstained") {
        controlResults.update({
          status: "withdraw",
          result: "hold",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export default new ProtocolsPageService();
