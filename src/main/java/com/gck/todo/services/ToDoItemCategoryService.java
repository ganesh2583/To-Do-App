package com.gck.todo.services;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gck.todo.entity.ToDoItemCategory;
import com.gck.todo.repo.ToDoItemCategoryRepo;

@Service
public class ToDoItemCategoryService {

	@Autowired
	private ToDoItemCategoryRepo toDoItemCategoryRepo;
	
	public ToDoItemCategory createItemCategory(ToDoItemCategory toDoItemCategory) {
		return toDoItemCategoryRepo.save(toDoItemCategory);
	}
	
	public ToDoItemCategory updateItemCategory(Long categoryId, ToDoItemCategory toDoItemCategory) {
		ToDoItemCategory savedToDoItemCategory = toDoItemCategoryRepo.findById(categoryId).get();
		BeanUtils.copyProperties(toDoItemCategory, savedToDoItemCategory, "categoryId");
		return toDoItemCategoryRepo.save(savedToDoItemCategory);
	}
	
	public ToDoItemCategory getToDoItemCategory(Long categoryId) {
		return toDoItemCategoryRepo.findById(categoryId).get();
	}
	
	public List<ToDoItemCategory> getAllToDoItemCategory() {
		return toDoItemCategoryRepo.findAll();
	}
}
