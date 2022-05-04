package com.ey.project.dao;

import java.util.List;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.ey.project.model.User;

@Repository
public class UserDao {
	@Autowired
	SessionFactory sessionFactory;
	
	public  User addUser(User u) {
		Session ss=sessionFactory.getCurrentSession();
		ss.persist(u);
		return u;
	}
	
	public List<User> getUser(){
		Session ss=sessionFactory.getCurrentSession();
		String s = "from User";
		Query<User> q=ss.createQuery(s);
		List<User> ls=q.list();
		return ls;
	}
	
	public   User getUserById(int id)
	{
		Session ss=sessionFactory.getCurrentSession();
		User u=ss.get(User.class, id);
		return  u;
	}
	
	
	
	public User updateUser(int id,User u) {
		Session ss=sessionFactory.getCurrentSession();
		User uu=ss.get(User.class, id);
		uu.setId(u.getId());
		uu.setFullname(u.getFullname());
		uu.setUsername(u.getUsername());
		uu.setPassword(u.getPassword());
		return uu;
	}
	
	public String deleteUserById(int id)
	{
		Session ss=sessionFactory.getCurrentSession();
		User u=ss.get(User.class, id);
		ss.delete(u);
		return "Deleted";
	}
	
//	public String loginCheck(String username, String password) {
//		Session currentSession = sessionFactory.getCurrentSession();
//        Query theQuery = currentSession.createQuery("from Admin a where a.username=:username AND u.password=:password");
//        theQuery.setParameter("username", username);
//        theQuery.setParameter("password", password);
//
//        List results = theQuery.list();
//
//        if ((results!=null) && (results.size()>0)){
//            return "success";
//        }
//        else {
//        return "failed";
//        }
//	}
	
	public String checkCredential(User user) {
		List<User> userList = getUser();
		for(User u: userList) {
			if(u.getUsername().equals(user.getUsername())) {
				if(u.getPassword().equals(user.getPassword())) {
					return "Access";
				}
			}
		}
		return "Denied";
		
	}
}
