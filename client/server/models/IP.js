const mongoose = require('mongoose');

const IPSchema = new mongoose.Schema({
  ipNumber: { type: String, required: true },
  year: { type: String, required: true },
  reportNumber: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['Active', 'NFA', 'KUS'],
    default: 'Active'
  },
  investigationOfficer: String,
  submissions: [{
    from: String,
    submittedTo: String,
    date: { type: Date, default: Date.now }
  }]
}, { timestamps: true });

module.exports = mongoose.model('IP', IPSchema);