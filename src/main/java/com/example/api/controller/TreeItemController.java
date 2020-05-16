package com.example.api.controller;

import com.example.api.model.TreeItem;
import com.example.api.repository.TreeItemRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/treeFolder")
public class TreeItemController {
    private final TreeItemRepository treeItemRepository;

    public TreeItemController(TreeItemRepository treeItemRepository) {
        this.treeItemRepository = treeItemRepository;
    }

    @GetMapping("/children/{parentId}")
    public Map<String, Map<String, List<TreeItem>>> getTreeItems(@PathVariable String parentId) {
        List<TreeItem> childrenList = treeItemRepository.findByParentId(parentId);

        return Collections.singletonMap("_embedded", Collections.singletonMap("treeFolder", childrenList));
    }
}
