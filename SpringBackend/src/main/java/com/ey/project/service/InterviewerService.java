package com.ey.project.service;

import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ey.project.dao.InterviewerDao;
import com.ey.project.model.Interviewer;


@Service
public class InterviewerService {
	@Autowired
	InterviewerDao ida;
	@Transactional
	public Interviewer addInterviewer(Interviewer i) {
		return ida.addInterviewer(i);
	}
	@Transactional
	public List<Interviewer>   get1()
	{
		   return   ida.get1();
	}
	
	@Transactional
	public Interviewer  getById1(int id)
	{
		   Interviewer  ii=   ida.getById1(id);
			   return   ii;
	}
	
	@Transactional
	public Interviewer update(int id, Interviewer i) {
		
		return ida.update(id,i);
	}
	
	@Transactional
	public  Interviewer remove(int id)
	{
		   return ida.deleteById1(id);
	}
	@Transactional
	public String assignInterviewer(int cid, int iid)
	{
		return ida.assignInterviewer(cid, iid);
	}
}
