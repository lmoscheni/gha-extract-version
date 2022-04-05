import core from "@actions/core";
import fs from "fs";
import pomParser from "pom-parser";

const filesByPackageManagement = {
  npm: () => {
    return new Promise((resolve, reject) => {
      fs.readFile(`${process.env.GITHUB_WORKSPACE}/package.json`, "utf8", (error, file) => {
        if (error) {
          reject(error);
        }

        const json = JSON.parse(file);

        resolve(json.version);
      })
    });
  },
  sbt: () => {
    return new Promise((resolve, reject) => {
      fs.readFile(
        `${process.env.GITHUB_WORKSPACE}/version.sbt`,
        "utf8",
        (error, file) => {
          if (error) {
            reject(error);
          }

          const version = file.split(":=")[1].replace(/\"/g, "");

          resolve(version);
        }
      );
    });
  },
  sbtRelease: () => {
    return new Promise((resolve, reject) => {
      fs.readFile(
        `${process.env.GITHUB_WORKSPACE || "."}/version.sbt`,
        "utf8",
        (error, file) => {
          if (error) {
            reject(error);
          }

          const version = file.split(":=")[1].replace(/\"/g, "").split("-")[0].replace(/" "/g, "");

          resolve(version);
        }
      );
    });
  },
  mvn: () => {
    let opts = {
      filePath: process.env.GITHUB_WORKSPACE + "/pom.xml",
    };

    return new Promise((resolve, reject) => {
      pomParser.parse(opts, (error, pomResponse) => {
        console.log("parsing pom.xml from project root");

        if (error) {
          reject(error);
        }

        console.log("Successfully parsed pom.xml", pomResponse);
        resolve(pomResponse.pomObject.project.version);
      });
    });
  },
};

try {
  const packageManagement = core.getInput("packageManagement");
  const getVersion = filesByPackageManagement[packageManagement];

  getVersion().then((version) => core.setOutput("version", version));
} catch (error) {
  core.setFailed(error.message);
}
