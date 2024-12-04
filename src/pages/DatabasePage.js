// src/pages/DatabasePage.js
import React, { useState } from 'react';
import Header from '../components/Header';
import DatabaseTable from '../components/DatabaseTable';
import Pagination from '../components/Pagination';
import Modal from '../components/Modal';
import './DatabasePage.css';

function DatabasePage() {
  const [records, setRecords] = useState([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Mike Johnson' },
    { id: 4, name: 'Anna Williams' },
    { id: 5, name: 'Tom Brown' },
    { id: 6, name: 'Emily Davis' },
    { id: 7, name: 'James Wilson' },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(Math.ceil(records.length / 5));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRecord, setCurrentRecord] = useState(null);

  const recordsPerPage = 5;

  const getCurrentPageRecords = () => {
    const start = (currentPage - 1) * recordsPerPage;
    const end = start + recordsPerPage;
    return records.slice(start, end);
  };

  const handleEdit = (record) => {
    setCurrentRecord(record);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    const updatedRecords = records.filter((record) => record.id !== id);
    setRecords(updatedRecords);
    setTotalPages(Math.ceil(updatedRecords.length / recordsPerPage));
  };

  const handleAddRecord = (newRecord) => {
    setRecords([...records, newRecord]);
    setIsModalOpen(false);
    setTotalPages(Math.ceil(records.length / recordsPerPage));
  };

  const handleSaveRecord = (updatedRecord) => {
    const updatedRecords = records.map((record) =>
      record.id === updatedRecord.id ? updatedRecord : record
    );
    setRecords(updatedRecords);
    setIsModalOpen(false);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <Header openAddModal={() => { setCurrentRecord(null); setIsModalOpen(true); }} />
      <DatabaseTable
        records={getCurrentPageRecords()}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={currentRecord ? handleSaveRecord : handleAddRecord}
        record={currentRecord}
      />
    </div>
  );
}

export default DatabasePage;
