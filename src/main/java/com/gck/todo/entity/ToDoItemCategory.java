package com.gck.todo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import lombok.Data;

@Entity
@Data
public class ToDoItemCategory {

	@Id
	@GeneratedValue( strategy = GenerationType.IDENTITY )
	private Long categoryId;
	
	@NotNull
	@Column(unique = true)
	private String categoryName;
}
