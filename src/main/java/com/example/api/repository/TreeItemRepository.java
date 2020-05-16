package com.example.api.repository;

import com.example.api.model.TreeItem;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "treeFolder", path = "treeFolder")
public interface TreeItemRepository extends PagingAndSortingRepository<TreeItem, String> {

    List<TreeItem> findByParentId(@Param("parentId") String parentId);
}
