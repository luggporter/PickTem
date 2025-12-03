/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_SHEETS_API_KEY: string
  readonly VITE_GOOGLE_SHEETS_SPREADSHEET_ID: string
  readonly VITE_GOOGLE_SHEETS_VIDEO_RANGE: string
  readonly VITE_GOOGLE_SHEETS_PRODUCT_RANGE: string
  readonly VITE_APPS_SCRIPT_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

