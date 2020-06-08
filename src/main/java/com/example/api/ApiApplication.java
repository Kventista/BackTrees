package com.example.api;

import com.example.api.db.Person;
import com.example.api.model.TreeItem;
import com.example.api.repository.PersonRep;
import com.example.api.repository.TreeItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@SpringBootApplication
@RestController
@RequestMapping(value = "", produces = "application/json")
public class ApiApplication {

    @Autowired
    private PersonRep personRep;
//    private TreeItemRepository treeItemRepository;

    public static void main(String[] args) {
        SpringApplication.run(ApiApplication.class, args);
    }

    @RequestMapping("create-person")
    public Person createPerson() {
        return personRep.save(new Person());
    }

//    @RequestMapping("create-treeItem")
//    public TreeItem createTreeItem() {
//        return treeItemRepository.save(new TreeItem());
//    }
}
