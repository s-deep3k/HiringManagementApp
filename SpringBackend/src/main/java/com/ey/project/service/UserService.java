package com.ey.project.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.ey.project.dao.UserDao;
import com.ey.project.model.User;

@Service
public class UserService {
	@Autowired
	UserDao ud;
	@Transactional
	public User addUser(User u) {
		return ud.addUser(u);
	}
	@Transactional
	public List<User>   getUser()
	{
		   return   ud.getUser();
	}
	
	@Transactional
	public User   getUserById(int id)
	{
		   User uu=   ud.getUserById(id);
			   return  uu;
	}
	
	@Transactional
	public String checkCredential(User user) {
		String u =ud.checkCredential(user);
		return u;
	}
	
	@Transactional
	public User updateAdmin(int id, User a) {
		
		return ud.updateUser(id, a);
	}
	
	@Transactional
	public  void remove(int id)
	{
		    ud.deleteUserById(id);
	}
}
