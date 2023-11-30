package com.example.testbackend.repository;

import com.example.testbackend.model.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IInvoiceRepository extends JpaRepository<Invoice, Long> {

}
