const fileInput = document.getElementById("fileUpload");
const imageOutput = document.getElementById("output");

const validateFileType = (fileObj) => {
  
  const acceptedTypes = ["png", "jpg", "jpeg"];

  const acceptedTypesLong = ["image/png", "image/jpg", "image/jpeg"];

  const nameExtension = fileObj.name.split(".").pop();


  if (!acceptedTypes.includes(nameExtension)) {

    fileInput.value = null;
  }

  if (!acceptedTypesLong.includes(fileObj.type)) {

    fileInput.value = null;
  }

  return true;
};

fileInput.addEventListener("change", () =>
  validateFileType(fileInput.files[0])
);

fileInput.addEventListener("change", async () => {
  let [file] = fileInput.files;
  const reader = new FileReader();
  reader.onload = (e) => {
    imageOutput.src = e.target.result;
  };

  reader.onerror = (err) => {
    console.error("Error reading file", err);
    alert("An error occured while reading the file");
  };

  reader.readAsDataURL(file);
});
