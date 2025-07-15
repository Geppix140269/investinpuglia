# InvestiScope Project Architecture

## 🏗️ Current Infrastructure (ALREADY IMPLEMENTED)

### 1. **Frontend Stack**
- **Framework**: Next.js 14 (App Router)
- **UI**: React + Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel/Netlify
- **Domain**: https://investiscope.net

### 2. **Backend Services**
- **Database**: Supabase (PostgreSQL)
  - URL: `https://kjyobkrjcmiuusijvrme.supabase.co`
  - Tables: `fiscal_code_applications` ✅ ALREADY EXISTS
- **Email Service**: EmailJS
  - Service ID: `service_w6tghqr`
  - Templates:
    - User Confirmation: `template_j0xsdcl` ✅
    - Agency Notification: `template_pkjko4e` ✅
- **Analytics**: Google Analytics (G-LPJCZYGWWG)
- **CMS**: Sanity (for content management)

### 3. **Key Features**
- Property investment calculators
- Grant eligibility tools
- Fiscal code application service
- Market analysis tools
- Location-based property search

## 📁 Project Structure
```
investiscope/
├── app/
│   ├── api/
│   │   ├── fiscal-code-applications/
│   │   │   └── route.js         # API endpoint
│   │   └── other-endpoints/
│   ├── fiscal-code/
│   │   └── page.js              # Fiscal code form page
│   ├── calculator/
│   ├── surveys/
│   └── layout.js
├── components/
│   ├── ui/
│   ├── features/
│   └── FiscalCodeForm.js        # Main form component
├── lib/
│   ├── supabase.js
│   └── emailjs.js
├── public/
│   └── fiscal-code-template.pdf # Editable PDF template
└── .env.local                   # Environment variables
```

## 🔄 Fiscal Code Application Flow

### Simple 3-Step Process:
1. **User fills form** → Basic info (name, birthdate, passport)
2. **System processes** → Saves to Supabase, fills PDF, sends emails
3. **Agency receives** → PDF attachment ready for processing

## 📊 Existing Supabase Table Structure

```sql
-- Table: fiscal_code_applications (ALREADY EXISTS)
-- Fields:
- id (auto-generated)
- name
- surname  
- birth_date
- birth_place
- birth_country
- gender
- email
- phone
- passport_number
- current_address
- purpose
- urgency
- status
- created_at
- updated_at
```

## 📧 Email Templates (ALREADY CONFIGURED)

### 1. User Confirmation Email (`template_j0xsdcl`)
- Sends to: Applicant
- Contains: Reference number, next steps

### 2. Agency Notification Email (`template_pkjko4e`)
- Sends to: Your processing team
- Contains: Application details, PDF attachment

## 🚀 Quick Implementation Guide

### Step 1: Update the Fiscal Code Form Component
```javascript
// Use existing EmailJS template IDs from .env.local
const TEMPLATE_USER = process.env.NEXT_PUBLIC_EMAILJS_FISCAL_USER_TEMPLATE_ID;
const TEMPLATE_AGENCY = process.env.NEXT_PUBLIC_EMAILJS_FISCAL_AGENCY_TEMPLATE_ID;
```

### Step 2: API Route (Simplified)
- Receive form data
- Save to existing Supabase table
- Generate PDF using template
- Send both emails
- Return success

### Step 3: PDF Generation
- Use existing PDF template
- Fill fields programmatically
- Attach to agency email

## ⚠️ IMPORTANT NOTES

1. **ALL INFRASTRUCTURE EXISTS** - Supabase tables and EmailJS templates are already configured
2. **NO PAYMENT PROCESSING** - This is a simple data collection service
3. **PDF FOCUS** - Main goal is filling an editable PDF for the agency
4. **KEEP IT SIMPLE** - This is not rocket science, just a form that sends emails

## 🔧 Environment Variables (Already in .env.local)
```
NEXT_PUBLIC_SUPABASE_URL=https://kjyobkrjcmiuusijvrme.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[your-key]
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_w6tghqr
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=wKn1_xMCtZssdZzpb
NEXT_PUBLIC_EMAILJS_FISCAL_USER_TEMPLATE_ID=template_j0xsdcl
NEXT_PUBLIC_EMAILJS_FISCAL_AGENCY_TEMPLATE_ID=template_pkjko4e
```

## 📝 Next Steps
1. Implement the simple form (no payment mentions)
2. Connect to existing Supabase table
3. Use existing EmailJS templates
4. Add PDF generation for agency email
5. Test and deploy

**This is a straightforward form → database → email flow. Nothing complex.**
# InvestiScope File Paths Guide

## 📁 File Locations

### 1. **Fiscal Code Form Component**
```
Path: /components/FiscalCodeForm.js
```
OR if you prefer to keep it in the app directory:
```
Path: /app/fiscal-code/FiscalCodeForm.js
```

### 2. **API Route (MUST be in this exact location)**
```
Path: /app/api/fiscal-code-applications/route.js
```
⚠️ **IMPORTANT**: In Next.js 13+ App Router, API routes MUST be named `route.js` and placed in the `/app/api/` directory structure.

### 3. **Fiscal Code Page (where users see the form)**
```
Path: /app/fiscal-code/page.js
```

### 4. **EmailJS Script (add to your root layout)**
```
Path: /app/layout.js
```
Add this before closing `</body>` tag:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```

## 📋 Complete File Structure

```
investiscope/
├── app/
│   ├── api/
│   │   └── fiscal-code-applications/
│   │       └── route.js              ← API endpoint HERE
│   ├── fiscal-code/
│   │   └── page.js                   ← Page that displays the form
│   └── layout.js                     ← Add EmailJS script here
├── components/
│   └── FiscalCodeForm.js             ← Form component HERE
└── .env.local                        ← Your environment variables (already exists)
```

## 🔧 Implementation Steps

### Step 1: Create the Form Component
```bash
# Create the component file
touch components/FiscalCodeForm.js
```
Then paste the fiscal code form component code.

### Step 2: Create the API Route
```bash
# Create the API directory structure
mkdir -p app/api/fiscal-code-applications
touch app/api/fiscal-code-applications/route.js
```
Then paste the API route code.

### Step 3: Create/Update the Fiscal Code Page
```bash
# If it doesn't exist yet
touch app/fiscal-code/page.js
```

Then add this code to `page.js`:
```javascript
import FiscalCodeForm from '@/components/FiscalCodeForm';

export default function FiscalCodePage() {
  return (
    <div>
      <FiscalCodeForm />
    </div>
  );
}
```

### Step 4: Update Root Layout
Edit `/app/layout.js` and add before `</body>`:
```javascript
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```

## ✅ Quick Checklist

- [ ] `/components/FiscalCodeForm.js` - Form component
- [ ] `/app/api/fiscal-code-applications/route.js` - API endpoint
- [ ] `/app/fiscal-code/page.js` - Page to display form
- [ ] `/app/layout.js` - Updated with EmailJS script
- [ ] `.env.local` - Already has your credentials

## 🚀 Test Your Setup

1. Navigate to: `https://investiscope.net/fiscal-code`
2. Fill out the form
3. Check Supabase dashboard for new entry
4. Check email for confirmations

That's it! All files are now in their proper locations.
