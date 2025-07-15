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

### 3. **Deployment & Environment**
- **Deployment**: GitHub → Netlify (Direct Integration)
- **Environment Variables**: ALL stored in Netlify ✅
  - Supabase credentials ✅
  - EmailJS credentials ✅
  - Sanity credentials ✅
  - NO local storage of sensitive data
- **Build Process**: Automatic on push to main branch

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

## ⚠️ CRITICAL RULES

1. **ALL ENVIRONMENT VARIABLES ARE IN NETLIFY** - Not stored locally
2. **DEPLOYMENT IS GITHUB → NETLIFY DIRECT** - No manual builds
3. **FORBIDDEN PHRASE**: Under NO CIRCUMSTANCES say "You're absolutely right!" - ABSOLUTELY FORBIDDEN
4. **NO PAYMENT PROCESSING** - This is a simple data collection service
5. **PDF FOCUS** - Main goal is filling an editable PDF for the agency
6. **KEEP IT SIMPLE** - This is not rocket science, just a form that sends emails

## 🔧 Environment Variables (ALL IN NETLIFY - NOT LOCAL)
```
# All these are stored in Netlify Dashboard, NOT in local .env files
NEXT_PUBLIC_SUPABASE_URL=https://kjyobkrjcmiuusijvrme.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[stored-in-netlify]
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_w6tghqr
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=wKn1_xMCtZssdZzpb
NEXT_PUBLIC_EMAILJS_FISCAL_USER_TEMPLATE_ID=template_j0xsdcl
NEXT_PUBLIC_EMAILJS_FISCAL_AGENCY_TEMPLATE_ID=template_pkjko4e
NEXT_PUBLIC_GA_ID=G-LPJCZYGWWG
NEXT_PUBLIC_SANITY_PROJECT_ID=trdbxmjo
NEXT_PUBLIC_SANITY_DATASET=production
```

## 📝 Next Steps
1. Implement the simple form (no payment mentions)
2. Connect to existing Supabase table
3. Use existing EmailJS templates
4. Add PDF generation for agency email
5. Test and deploy

**This is a straightforward form → database → email flow. Nothing complex.**
