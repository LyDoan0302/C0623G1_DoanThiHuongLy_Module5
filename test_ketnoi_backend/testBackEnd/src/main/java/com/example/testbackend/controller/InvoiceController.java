package com.example.testbackend.controller;

import com.example.testbackend.model.Invoice;
import com.example.testbackend.model.Product;
import com.example.testbackend.service.IInvoiceService;
import com.example.testbackend.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/invoices")
@CrossOrigin("*")
public class InvoiceController {
    @Autowired
    private IInvoiceService invoiceService;
    @Autowired
    private IProductService productService;

    @GetMapping
    public ResponseEntity<List<Invoice>> findAllInvoice() {
        List<Invoice> invoiceList = (List<Invoice>) invoiceService.findAll();
        if(invoiceList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(invoiceList, HttpStatus.OK);
    }


    @PostMapping("/create")
    public ResponseEntity saveInvoice(@RequestBody Invoice invoice) {
        Float totalPayment = invoice.getQuantity() * invoice.getProduct().getPrice();
        invoice.setTotalPayment(totalPayment);
        invoiceService.saveInvoice(invoice);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteInvoice(@PathVariable Long id ) {
        Invoice invoice = invoiceService.findById(id);
        if(invoice == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        invoiceService.deleteInvoice(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
