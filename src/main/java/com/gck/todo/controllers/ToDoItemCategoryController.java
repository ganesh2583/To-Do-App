package com.gck.todo.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gck.todo.entity.ToDoItemCategory;
import com.gck.todo.services.ToDoItemCategoryService;

@RestController
@RequestMapping( path = "/categories")
@CrossOrigin()
public class ToDoItemCategoryController {
	
	@Autowired
	ToDoItemCategoryService toDoItemCategoryService;
	
	@GetMapping
	public ResponseEntity<List<ToDoItemCategory>> getAllCategories() {
		return new ResponseEntity<List<ToDoItemCategory>>(toDoItemCategoryService.getAllToDoItemCategory(), HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<ToDoItemCategory> createCategories(@RequestBody @Valid ToDoItemCategory toDoItemCategory) {
		return new ResponseEntity<ToDoItemCategory>(toDoItemCategoryService.createItemCategory(toDoItemCategory), HttpStatus.CREATED);
	}

}
