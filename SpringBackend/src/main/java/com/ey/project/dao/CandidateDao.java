package com.ey.project.dao;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;
import com.ey.project.model.Candidate;
import com.ey.project.model.Interviewer;


@Repository
public class CandidateDao {
	@Autowired
	SessionFactory sessionFactory;
	public  Candidate addCandidate(Candidate c) {
		Session ss=sessionFactory.getCurrentSession();
		ss.persist(c);
		return c;
	}
	
	public List<Candidate> get(){
		Session ss=sessionFactory.getCurrentSession();
		String s = "from Candidate";
		Query<Candidate> q=ss.createQuery(s);
		List<Candidate> ls=q.list();
		return ls;
	}
	
	public   Candidate getById(int id)
	{
		Session ss=sessionFactory.getCurrentSession();
		Candidate  c=ss.get(Candidate.class, id);
		return   c;
	}
	
	public Candidate update(int id,Candidate c) {
		Session ss=sessionFactory.getCurrentSession();
		Candidate cc=ss.get(Candidate.class, id);
		cc.setId(c.getId());
		cc.setName(c.getName());
		cc.setDob(c.getDob());
		cc.setGender(c.getGender());
		cc.setEmail(c.getEmail());
		cc.setMobile(c.getMobile());
		cc.setYoe(c.getYoe());
		cc.setCskills(c.getCskills());
		cc.setNperiod(c.getNperiod());
		cc.setExpctc(c.getExpctc());
		cc.setBtech(c.getBtech());
		cc.setStatus(c.getStatus());
		cc.setFeedback(c.getFeedback());
		cc.setRelocate(c.getRelocate());
		ss.update(cc);
		return cc;
	}
	
	public String deleteById(int id)
	{
		Session ss=sessionFactory.getCurrentSession();
		Candidate  c=ss.get(Candidate.class, id);
		ss.delete(c);
		return "Deleted";
	}
	
//	public String uploadData( MultipartFile file) throws Exception{
//		List<Candidate> candidateList = new ArrayList<>();
//		InputStream inputStream = file.getInputStream();
//		CsvParserSettings setting = new CsvParserSettings();
//		setting.setHeaderExtractionEnabled(true);
//		CsvParser parser = new CsvParser(setting);
//		List<Record> parseAllRecords = parser.parseAllRecords(inputStream);
//		parseAllRecords.forEach(record ->{
//			Candidate c = new Candidate();
//			c.setId(record.getInt("id"));
//			c.setName(record.getString("name"));
//			c.setDob(record.getDate("dob"));
//			c.setGender(record.getString("gender"));
//			c.setEmail(record.getString("email"));
//			c.setMobile(record.getLong("mobile"));
//			c.setYoe(record.getInt("yoe"));
//			c.setCskills(record.getString("cskills"));
//			c.setRole(record.getString("role"));
//			candidateList.add(c);
//		});
//		return "Upload Successful!!";
//	}
	
	public List<Interviewer> get1(){
		Session ss=sessionFactory.getCurrentSession();
		String s = "from Interviewer";
		Query<Interviewer> q=ss.createQuery(s);
		List<Interviewer> ls=q.list();
		return ls;
	}
	
	//List Of Interviewer for a Candidate
	public List<Interviewer> getInterviewer(int id)
	{
		Session ss=sessionFactory.getCurrentSession();
		//Candidate c = getById(id);
		Candidate  c=ss.get(Candidate.class, id);
		//System.out.println(c);
		List<Interviewer> hs=new ArrayList<Interviewer>();
		List<Interviewer> l= get1();
		for(int i=0; i<l.size();i++)
		{
			if(l.get(i).role.toLowerCase().equals(c.getRole().toLowerCase()) && l.get(i).sts.equals("N"))
			{
				if(l.get(i).yoe>c.getYoe())
				{
				   hs.add(l.get(i));
				}
			}
		}
		return hs;
	}
	
	//Candidate Based on their Role
	public List<Candidate> domain( String role)
	{
		String s=role.replace('-', ' ');
		List<Candidate> ls= get();
		List<Candidate> ls1=new ArrayList<Candidate>();
		for(Candidate c: ls)
		{
			if(c.getRole().toLowerCase().equals(s.toLowerCase()))
			{
				ls1.add(c);
			}
		}
		return ls1;
	}


	}

