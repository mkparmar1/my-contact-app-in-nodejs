// @desc Get All Contacts
// @route GET /api/contacts
// @access public
const getContacts = (req, res) => {
  res.status(200).json({ message: "Get All Contacts " });
};

// @desc Create New Contacts
// @route POST /api/contacts
// @access public
const createContact = (req, res) => {
  console.log("The request Body is : ", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All Field are mednatory");
  }
  res.status(201).json({ message: "Create New Contacts " });
};

// @desc Get Contact
// @route GET /api/contacts/:id
// @access public
const getContact = (req, res) => {
  res.status(200).json({ message: `Get Contacts for ${req.params.id}` });
};

// @desc Update Contacts
// @route PUT /api/contacts/:id
// @access public
const updateContact = (req, res) => {
  res.status(200).json({ message: `Update Contacts for ${req.params.id}` });
};

// @desc Delete Contact
// @route DELETE /api/contacts/:id
// @access public
const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete Contacts for ${req.params.id}` });
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
