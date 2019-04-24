package com.gck.todo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gck.todo.entity.ToDoItem;

@Repository
public interface ToDoItemRepo extends JpaRepository<ToDoItem, Long> {

	List<ToDoItem> findByItemCategoryCategoryId(Long categoryId);
}
