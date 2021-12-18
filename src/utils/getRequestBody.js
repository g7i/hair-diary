export default function getRequestBody(continuationtoken) {
  return {
    requestobjects: [
      {
        posts: {
          operationtype: "read",
          id: {
            "return": true,
          },
          iscalendarentry: {
            searchvalues: ["true"],
            "return": true,
          },
          media: {
            "return": true,
          },
          rating: {
            "return": true,
          },
          text: {
            "return": true,
          },
          privacy: {
            searchvalues: [
              18,
            ],
            "return": true,
          },
          typeofday: {
            "return": true,
          },
          calendardatetime: {
            "return": true,
            sort: "descending",
          },
          maxitemcount: "20",
          continuationtoken,
        }
      }
    ]
  };
}
