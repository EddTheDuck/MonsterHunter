// const fs = require("fs");
// const path = require("path");

// const directoryPath = path.join(process.cwd(), "public/images"); // Adjust the folder path as needed

// function renameFilesInDirectory(directoryPath: string) {
//   try {
//     const files = fs.readdirSync(directoryPath);

//     files.forEach((file: string) => {
//       if (file.includes("-")) {
//         const parts = file.split("-");
//         const newName = parts.slice(1).join("-").trim();
//         const oldPath = path.join(directoryPath, file);
//         const newPath = path.join(directoryPath, newName);

//         fs.renameSync(oldPath, newPath);
//         console.log(`Renamed: ${file} to ${newName}`);
//       }
//     });
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// renameFilesInDirectory(directoryPath);
