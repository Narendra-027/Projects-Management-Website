let mongoose = require("mongoose"),
express = require("express"),
router = express.Router();


let projectSchema = require("../models/Project");


router.post("/create-project", (req, res, next) => {
projectSchema.create(req.body, (error, data) => {
	if (error) {
	return next(error);
	} else {
	console.log(data);
	res.json(data);
	}
});
});

// READ Projects
router.get("/signup", (req, res) => {
projectSchema.find((error, data) => {
	if (error) {
	return next(error);
	} else {
	res.json(data);
	}
});
});
router.get("/", (req, res) => {
	projectSchema.find((error, data) => {
		if (error) {
		return next(error);
		} else {
		res.json(data);
			// console.log(req);
		}
	});
	});

// // READ SPECIFIC PROJECTS BY PARTICULAR PROF
// router.get("/email/:email", (req, res) => {
// 	projectSchema.find(req.body.email,(error, data) => {
// 		if (error) {
// 		return next(error);
// 		} else {
// 		res.json(data);
// 		}
// 	});
// 	});

// router.get("/projects/branch/:branch", async(req,res) => {
//     try{
//         const branch = req.params.branch;
//         const branchProj = await project.find({branch},{projection: {  _id: 0, __v: 0 }});
//         console.log(branchProj);
//         if(!branchProj){
//             return res.status(404).send();
//         }
//         else{
            
//             res.send(branchProj);
//         }
//     }catch(e){
//         res.send(e);
//     }
// });
// READ PROJECTS AS PER BRANCH



router.get("/branch/:branch", (req, res) => {
	
	projectSchema.find({"branch":req.params.branch},(error, data) => {
		if (error) {
		return (error);
		} else {
		res.json(data);
		}
	});
	});
// UPDATE Project
router.route("/update-project/:id")

.get((req, res) => {
	projectSchema.findById(
		req.params.id, (error, data) => {
	if (error) {
		return next(error);
	} else {
		res.json(data);
	}
	});
})

// Update Project Data
.put((req, res, next) => {
	projectSchema.findByIdAndUpdate(
	req.params.id,
	{
		$set: req.body,
	},
	(error, data) => {
		if (error) {
		return next(error);
		console.log(error);
		} else {
		res.json(data);
		console.log("Project updated successfully !");
		}
	}
	);
});

// Delete Project
router.delete("/delete-project/:id",
(req, res, next) => {
projectSchema.findByIdAndRemove(
	req.params.id, (error, data) => {
	if (error) {
	return next(error);
	} else {
	res.status(200).json({
		msg: data,
	});
	}
});
});

module.exports = router;
