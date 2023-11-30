package com.example.testbackend.service;

import com.example.testbackend.model.Invoice;
import org.w3c.dom.stylesheets.LinkStyle;

import java.util.List;

public interface IInvoiceService {
    List<Invoice> findAll();
    void saveInvoice(Invoice invoice);
    void deleteInvoice(Long id);
    Invoice findById(Long id);

}
