package com.example.api.model;

import lombok.*;


import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor

public class TreeItem {

    @javax.persistence.Id
    private  String Id;
    private  String parentId = "root";
    private  String name;
    private  String size;
    private  boolean isLeaf;


}
