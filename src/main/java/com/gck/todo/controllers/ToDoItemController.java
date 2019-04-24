package com.gck.todo.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gck.todo.entity.ToDoItem;
import com.gck.todo.services.ToDoItemService;

@RestController
@RequestMapping( path = "/categories/{categoryId}/items")
@CrossOrigin()
public class ToDoItemController {
	
	@Autowired
	ToDoItemService toDoItemService;

	@GetMapping
	public ResponseEntity<List<ToDoItem>> getAllToDoItems(@PathVariable("categoryId") Long categoryId) {
		return new ResponseEntity<List<ToDoItem>>(toDoItemService.getAllToDoItemsInACategory(categoryId), HttpStatus.OK);
	}
	
	@GetMapping("/{toDoItemId}")
	public ResponseEntity<ToDoItem> getOneToDoItems(@PathVariable("categoryId") Long categoryId, @PathVariable("toDoItemId") Long toDoItemId) {
		return new ResponseEntity<ToDoItem>(toDoItemService.getToDoItem(categoryId, toDoItemId), HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<ToDoItem> createToDoItem(@PathVariable("categoryId") Long categoryId, @RequestBody @Valid ToDoItem toDoItem) {
		return new ResponseEntity<ToDoItem>(toDoItemService.createToDoItem(categoryId, toDoItem), HttpStatus.CREATED);
	}
	
	@PutMapping("/{toDoItemId}")
	public ResponseEntity<ToDoItem> createToDoItem(@PathVariable("categoryId") Long categoryId, @PathVariable("toDoItemId") Long toDoItemId, @RequestBody @Valid ToDoItem toDoItem) {
		return new ResponseEntity<ToDoItem>(toDoItemService.updateToDoItem(categoryId, toDoItemId, toDoItem), HttpStatus.OK);
	}
}
