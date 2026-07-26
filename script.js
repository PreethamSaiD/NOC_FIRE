const inspectionLink = document.getElementById("inspectionReport");
const finalLink = document.getElementById("lblfinal");

inspectionLink.href = inspectionPdf;
inspectionLink.innerText = "View PDF";
inspectionLink.target = "_blank";

finalLink.href = finalNocPdf;
finalLink.innerText = "View PDF";
finalLink.target = "_blank";