package com.example.project.model;

import lombok.SneakyThrows;

import java.sql.SQLException;

public class AnimalHistoryComments {
    private int recordId;
    private int commentId;
    private String description;


    public AnimalHistoryComments(int recordId, int commentId, String description) {
        this.recordId = recordId;
        this.commentId = commentId;
        this.description = description;
    }

    @Override
    public String toString() {
        return "AnimalHistoryComments{" +
                "recordId=" + recordId +
                ", commentId=" + commentId +
                ", description='" + description + '\'' +
                '}';
    }

    public int getRecordId() {
        return recordId;
    }

    public void setRecordId(int recordId) {
        this.recordId = recordId;
    }

    public int getCommentId() {
        return commentId;
    }

    public void setCommentId(int commentId) {
        this.commentId = commentId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
