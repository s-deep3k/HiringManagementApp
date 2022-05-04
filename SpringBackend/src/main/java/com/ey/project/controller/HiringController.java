package com.ey.project.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.ey.project.model.User;
import com.ey.project.model.Candidate;
import com.ey.project.model.Interviewer;
import com.ey.project.service.UserService;
import com.ey.project.service.CandidateService;
import com.ey.project.service.InterviewerService;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
public class HiringController {
	@Autowired
	CandidateService cs;
	@Autowired
	InterviewerService is;
	@Autowired
	UserService us;
	
//	Candidate Controller
	@PostMapping("/addCandidate")
	public Candidate addCandidate(@RequestBody Candidate c) {
		return cs.addCandidate(c);
	}
	
	@GetMapping("/showCandidate")
	public List<Candidate> get(){
		return cs.get();
	}
	
	@GetMapping("/showCandidateById/{id}")
	public  Candidate  getById(@PathVariable("id") int id)
	{
		  return  cs.getById(id);
	}
//	@PostMapping("/uploadCSV")
//	public String uploadData(@RequestBody MultipartFile file) throws Exception{
//		return cs.uploadData(file);
//	}
	
	@PutMapping("/updateCandidateDetails/{id}")
	public ResponseEntity<String>  updateCandidate(@PathVariable("id") int id, @RequestBody Candidate c)
	{
		 cs.update(id, c);
		 return new ResponseEntity<>("Success!", HttpStatus.OK); 
	}
	
	@DeleteMapping("/deleteCandidate/{id}")
	public ResponseEntity<String>  deleteCandidate(@PathVariable("id") int id)
	{
		cs.remove(id);
		return new ResponseEntity<>("Removed Details!", HttpStatus.OK);
	}
	
	/* Retrieving list of interviewer for a particular candidate id */
	
	@GetMapping("/getInterviewer/{id}")
	public List<Interviewer> getInterviewer(@PathVariable("id") int id)
	{
		
		return cs.getInterviewer(id);
	}
	@PostMapping("/assignInterviewer/{cid}/{iid}")
	public String assignInterviewer(@PathVariable("cid") int cid,@PathVariable("iid") int iid)
	{
		return is.assignInterviewer(cid, iid);
	}
	@GetMapping("/getCandidateByRole/{role}")
	public List<Candidate> domain(@PathVariable("role") String role)
	{
		return cs.domain(role);
	}	
	
	
	/* From Here */
	/* Interviewer Controller Part */

	@PostMapping("/addInterviewer")
	public Interviewer addInterviewer(@RequestBody Interviewer i) {
		return is.addInterviewer(i);
	}
	
	@GetMapping("/showInterviewer")
	public List<Interviewer> get1(){
		return is.get1();
	}
	
	@GetMapping("/showInterviewerById/{id}")
	public  Interviewer  getById1(@PathVariable("id") int id)
	{
		  return  is.getById1(id);
	}
	
	
	@PutMapping("/updateInterviewerDetails/{id}")
	public ResponseEntity<String>  updateInterviewer(@PathVariable("id") int id, @RequestBody Interviewer i)
	{
		is.update(id, i); 
		return new ResponseEntity<>("Success!", HttpStatus.OK);
	}
	
	@DeleteMapping("/deleteInterviewer/{id}")
	public ResponseEntity<String>  deleteInterviewer(@PathVariable("id") int id)
	{
		is.remove(id);
		return new ResponseEntity<>("Removed Details!", HttpStatus.OK);
	}
	
	
	/* From Here */
	/* Admin Controller Part */

	@PostMapping("/addUser")
	public User addUser(@RequestBody User u) {
		return us.addUser(u);
	}
	
	@GetMapping("/showUser")
	public List<User> getUser(){
		return us.getUser();
	}
	
	@GetMapping("/showUserById/{id}")
	public  User  getUserById(@PathVariable("id") int id)
	{
		  return  us.getUserById(id);
	}
	
	@PostMapping("/checkCredential")
	public String checkCredential(@RequestBody User user) {
		return us.checkCredential(user);
	}
	
	@PutMapping("/updateUserDetails/{id}")
	public ResponseEntity<String>  updateUser(@PathVariable("id") int id, @RequestBody User a)
	{
		us.updateAdmin(id, a);
		return new ResponseEntity<>("Success!", HttpStatus.OK);
	}
	
	@DeleteMapping("/deleteUser/{id}")
	public ResponseEntity<String>  deleteUser(@PathVariable("id") int id)
	{
		us.remove(id); 
		return new ResponseEntity<>("Removed!", HttpStatus.OK);
	}
	
}
