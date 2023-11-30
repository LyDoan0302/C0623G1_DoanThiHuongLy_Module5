package com.example.testbackend.model;

import jakarta.persistence.*;

@Entity
public class Invoice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long invoiceId;
    private String invoiceCode;
    @Column(columnDefinition = "date")
    private String buyDate;
    private Long quantity;
    private Float totalPayment;

@ManyToOne
@JoinColumn(name="product_id", referencedColumnName = "productId")
    private Product product;
public Invoice() {}

    public Invoice(Long invoiceId, String invoiceCode, String buyDate, Long quantity, Float totalPayment, Product product) {
        this.invoiceId = invoiceId;
        this.invoiceCode = invoiceCode;
        this.buyDate = buyDate;
        this.quantity = quantity;
        this.totalPayment = totalPayment;
        this.product = product;
    }

    public Long getInvoiceId() {
        return invoiceId;
    }

    public void setInvoiceId(Long invoiceId) {
        this.invoiceId = invoiceId;
    }

    public String getInvoiceCode() {
        return invoiceCode;
    }

    public void setInvoiceCode(String invoiceCode) {
        this.invoiceCode = invoiceCode;
    }

    public String getBuyDate() {
        return buyDate;
    }

    public void setBuyDate(String buyDate) {
        this.buyDate = buyDate;
    }

    public Long getQuantity() {
        return quantity;
    }

    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }

    public Float getTotalPayment() {
        return totalPayment;
    }

    public void setTotalPayment(Float totalPayment) {
        this.totalPayment = totalPayment;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
