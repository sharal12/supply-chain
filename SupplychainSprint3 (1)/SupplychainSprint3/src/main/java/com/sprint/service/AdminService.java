package com.sprint.service;


import java.util.List;

import com.sprint.beans.Admin;

public interface AdminService {
String saveOrUpdate(Admin admin);
	
	List<Admin> getAllAdmin();
	
	Admin loginAdmin(int aid, String adminPwd);
	
	Admin findOneById(int aid);
}
