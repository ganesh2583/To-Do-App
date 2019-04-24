package com.gck.todo.services;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gck.todo.entity.ToDoItem;
import com.gck.todo.entity.ToDoItemCategory;
import com.gck.todo.repo.ToDoItemCategoryRepo;
import com.gck.todo.repo.ToDoItemRepo;

@Service
public class ToDoItemService {
	
	@Autowired
	private ToDoItemRepo toDoItemRepo;
	
	@Autowired
	private ToDoItemCategoryRepo toDoItemCategoryRepo;
	
	public ToDoItem createToDoItem(Long todoItemCategoryId, ToDoItem toDoItem) {
		ToDoItemCategory toDoItemCategory = toDoItemCategoryRepo.findById(todoItemCategoryId).get();
		toDoItem.setItemCategory(toDoItemCategory);
		return toDoItemRepo.save(toDoItem);
	}
	
	public ToDoItem updateToDoItem(Long todoItemCategoryId, Long todoItemId, ToDoItem toDoItem) {
		ToDoItemCategory toDoItemCategory = toDoItemCategoryRepo.findById(todoItemCategoryId).get();
		ToDoItem savedToDoItem = toDoItemRepo.getOne(todoItemId);
		BeanUtils.copyProperties(toDoItem, savedToDoItem, "toDoItemId");
		savedToDoItem.setItemCategory(toDoItemCategory);
		return toDoItemRepo.save(savedToDoItem);
	}
	
	public ToDoItem getToDoItem(Long todoItemCategoryId, Long todoItemId) {
		return toDoItemRepo.getOne(todoItemId);
	}
	
	public List<ToDoItem> getAllToDoItemsInACategory(Long todoItemCategoryId) {
		return toDoItemRepo.findByItemCategoryCategoryId(todoItemCategoryId);
	}

}
