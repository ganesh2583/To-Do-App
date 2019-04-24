package com.gck.todo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gck.todo.entity.ToDoItemCategory;

@Repository
public interface ToDoItemCategoryRepo extends JpaRepository<ToDoItemCategory, Long> {

}
