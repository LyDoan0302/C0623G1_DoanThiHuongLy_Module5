package com.example.testbackend.service;

import com.example.testbackend.model.Invoice;
import com.example.testbackend.repository.IInvoiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InvoiceService implements IInvoiceService {
    @Autowired
    private IInvoiceRepository iInvoiceRepository;



    @Override
    public List<Invoice> findAll() {
        return iInvoiceRepository.findAll();
    }

    @Override
    public void saveInvoice(Invoice invoice) {
        iInvoiceRepository.save(invoice);
    }

    @Override
    public void deleteInvoice(Long id) {
        iInvoiceRepository.deleteById(id);
    }

    @Override
    public Invoice findById(Long id) {
        return iInvoiceRepository.findById(id).get();
    }
}
