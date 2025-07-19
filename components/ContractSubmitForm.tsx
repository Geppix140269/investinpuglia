// components/ContractSubmitForm.tsx
"use client";

import { useState } from "react";
import { generatePdfBlob } from "@/lib/generatePdfBlob";
import { sendContractWithEmailJS } from "@/lib/sendContractWithEmailJS";

export default function ContractSubmitForm() {
  const [form, setForm] = useState({
    sellerName: "",
    sellerBirth: "",
    sellerCF: "",
    sellerAddress: "",
    buyerName: "",
    companyName: "",
    vatNumber: "",
    buyerCF: "",
    buyerAddress: "",
    buyerEmail: "",
    propertyAddress: "",
    cadastralData: "",
    price: "",
    deposit: "",
    deedDate: "",
    financingDeadline: "",
    court: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Generating PDF...");
    const pdfBlob = generatePdfBlob(form);
    setStatus("Sending Email...");
    await sendContractWithEmailJS({ form, pdfBlob });
    setStatus("Contract sent successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="sellerName" placeholder="Seller Name" onChange={handleChange} required className="input" />
      <input type="text" name="sellerBirth" placeholder="Seller Birthplace" onChange={handleChange} required className="input" />
      <input type="text" name="sellerCF" placeholder="Seller CF" onChange={handleChange} required className="input" />
      <input type="text" name="sellerAddress" placeholder="Seller Address" onChange={handleChange} required className="input" />
      <input type="text" name="buyerName" placeholder="Buyer Name" onChange={handleChange} required className="input" />
      <input type="text" name="companyName" placeholder="Company Name" onChange={handleChange} className="input" />
      <input type="text" name="vatNumber" placeholder="VAT Number" onChange={handleChange} className="input" />
      <input type="text" name="buyerCF" placeholder="Buyer CF" onChange={handleChange} required className="input" />
      <input type="text" name="buyerAddress" placeholder="Buyer Address" onChange={handleChange} required className="input" />
      <input type="email" name="buyerEmail" placeholder="Buyer Email" onChange={handleChange} required className="input" />
      <input type="text" name="propertyAddress" placeholder="Property Address" onChange={handleChange} required className="input" />
      <input type="text" name="cadastralData" placeholder="Cadastral Data" onChange={handleChange} required className="input" />
      <input type="text" name="price" placeholder="Price (€)" onChange={handleChange} required className="input" />
      <input type="text" name="deposit" placeholder="Deposit (€)" onChange={handleChange} required className="input" />
      <input type="date" name="deedDate" placeholder="Deed Date" onChange={handleChange} required className="input" />
      <input type="date" name="financingDeadline" placeholder="Mini PIA Deadline" onChange={handleChange} required className="input" />
      <input type="text" name="court" placeholder="Competent Court" onChange={handleChange} required className="input" />

      <button type="submit" className="btn btn-primary">Send Contract</button>
      {status && <p className="text-sm text-gray-600">{status}</p>}
    </form>
  );
}
