package com.example.api.model;


import javax.persistence.*;

@Entity
public class TreeItem {

    @javax.persistence.Id
    private String Id;
    private String parentId = "root";
    private String name;
    private String size;
    private boolean isLeaf;

    public TreeItem() {

    }

    public String getId() {
        return Id;
    }

    public void setId(String id) {
        this.Id = id;
    }

    public String getParentId() {
        return parentId;
    }

    public void setParentId(String parentId) {
        this.parentId = parentId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public boolean isLeaf() {
        return isLeaf;
    }

    public void setLeaf(boolean leaf) {
        isLeaf = leaf;
    }

}
