module.exports = {
  name: "algorithms-nx",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/algorithms-nx/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
