var AllAllotment = require('../hostprj/src/jsons/dashboardview/AllAllotment.json');
var AllApprovalpending  = require('../hostprj/src/jsons/dashboardview/AllApprovalpending.json');
var AllApprovalstatus  = require('../hostprj/src/jsons/dashboardview/AllApprovalstatus.json');
var myApprovalpending  = require('../hostprj/src/jsons/dashboardview/MyApprovalPending.json');
var MyAllotment  = require('../hostprj/src/jsons/dashboardview/MyAllotment.json');
var MyApprovalcompleted = require('../hostprj/src/jsons/dashboardview/MyApprovalcompleted.json');
var BussinessUnit = require('../hostprj/src/jsons/Masterlibrary/BussinessUnit.json')
var CommonDoctoBUtable1 = require('../hostprj/src/jsons/Masterlibrary/CommonDoctoBUtable1.json')
var CommonDoctoBUtable2 = require('../hostprj/src/jsons/Masterlibrary/CommonDoctoBUtable2.json')
var DocumentCode = require('../hostprj/src/jsons/Masterlibrary/DocumentCode.json')
var DocumentType = require('../hostprj/src/jsons/Masterlibrary/DocumentType.json')
var ManageLibrary = require('../hostprj/src/jsons/Masterlibrary/ManageLibrary.json')
var StagingtoProduction = require('../hostprj/src/jsons/Masterlibrary/StagingtoProduction.json')
var VirtualGroupDocSetUp = require('../hostprj/src/jsons/Masterlibrary/VirtualGroupDocSetUp.json')
var LibrarySummary = require('../hostprj/src/jsons/dashboardview/LibrarySummary.json')
var UserActivitySummary = require('../hostprj/src/jsons/dashboardview/UserActivitySummary.json')
var ApprovalDocument = require('../hostprj/src/jsons/ManageDocument/ApprovalDocument.json')
var ApprovedDocument = require('../hostprj/src/jsons/ManageDocument/ApprovedDocument.json')
var InProgressDocumenttable1 = require('../hostprj/src/jsons/ManageDocument/InProgressDocumenttable1.json')
var InProgressDocumenttable2 = require('../hostprj/src/jsons/ManageDocument/InProgressDocumenttable2.json')
var MyDocumentStatus = require('../hostprj/src/jsons/ManageDocument/MyDocumentStatus.json')
var ReEditDocument = require('../hostprj/src/jsons/ManageDocument/ReEditDocument.json')
var SubmittedDocument = require('../hostprj/src/jsons/ManageDocument/SubmittedDocument.json')
var AuditReport = require('../hostprj/src/jsons/Admin/AuditReport.json')
var Manageuser = require('../hostprj/src/jsons/Admin/Manageuser.json')
var Manageusercategory = require('../hostprj/src/jsons/Admin/Manageusercategory.json')




// var thirdRoute  = require('./jsonfile3.json');
// var fourthRoute = require('./jsonfile4.json');
// and so on

module.exports = function() {
return {
AllApprovalpending : AllApprovalpending,
AllApprovalstatus : AllApprovalstatus,
AllAllotment :AllAllotment,
myApprovalpending:myApprovalpending,
MyAllotment:MyAllotment,
MyApprovalcompleted:MyApprovalcompleted,
BussinessUnit:BussinessUnit,
CommonDoctoBUtable1:CommonDoctoBUtable1,
CommonDoctoBUtable2:CommonDoctoBUtable2,
DocumentCode:DocumentCode,
DocumentType:DocumentType,
ManageLibrary:ManageLibrary,
StagingtoProduction:StagingtoProduction,
VirtualGroupDocSetUp:VirtualGroupDocSetUp,
LibrarySummary:LibrarySummary,
UserActivitySummary:UserActivitySummary,
ApprovalDocument:ApprovalDocument,
ApprovedDocument:ApprovedDocument,
InProgressDocumenttable1:InProgressDocumenttable1,
InProgressDocumenttable2:InProgressDocumenttable2,
MyDocumentStatus:MyDocumentStatus,
ReEditDocument:ReEditDocument,
SubmittedDocument:SubmittedDocument,
AuditReport:AuditReport,
Manageuser:Manageuser,
Manageusercategory:Manageusercategory,







// thirdRoute  : thirdRoute,
// fourthRoute : fourthRoute
// and so on
 }
}