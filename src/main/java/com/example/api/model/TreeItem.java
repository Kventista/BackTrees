package com.example.api.model;


import javax.persistence.*;

@Entity
//@Table(name = "TREEITEM")
public class TreeItem {

    @javax.persistence.Id
//    @GeneratedValue
//    @Column(name = "id", nullable = false)
    private String Id;
    private String parentId = "root";

//    @Column(name = "item_name")
    private String name;

//    @Column(name = "size")
    private String size;

//    @Column(name = "isLeaf", nullable = false)
    private boolean isLeaf;

    public TreeItem() {

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
}
