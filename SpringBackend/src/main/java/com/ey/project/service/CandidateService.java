package com.ey.project.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import com.ey.project.dao.CandidateDao;
import com.ey.project.model.Candidate;
import com.ey.project.model.*;

@Service
public class CandidateService {
	@Autowired
	CandidateDao cd;
	@Transactional
	public Candidate addCandidate(Candidate c) {
		return cd.addCandidate(c);
	}
	@Transactional
	public List<Candidate>   get()
	{
		   return   cd.get();
	}
	
	@Transactional
	public Candidate   getById(int id)
	{
		   Candidate  cc=   cd.getById(id);
			   return   cc;
	}
	
	@Transactional
	public Candidate update(int id, Candidate c) {
		
		return cd.update(id,c);
	}
	
	@Transactional
	public  void remove(int id)
	{
		    cd.deleteById(id);
	}
	
//	@Transactional
//	public String uploadData(MultipartFile file) throws Exception {
//		String c=cd.uploadData(file);
//		return c;
//	}
	
	@Transactional
	public List<Interviewer>  getInterviewer(int id)
	{
		return cd.getInterviewer(id);
		
	}
	@Transactional
	public List<Candidate> domain(String role)
	{
		return cd.domain(role);
	}
}