import { NextResponse } from 'next/server'
import { renderToBuffer } from '@react-pdf/renderer'
import React from 'react'
import { ResumePDF } from '@/components/ResumePDF'
import { resumeData } from '@/data/resumeData'
import type { DocumentProps } from '@react-pdf/renderer'

export async function GET() {
  try {
    // Generate PDF using React-PDF with createElement to avoid JSX in API route
    const resumeDocument = React.createElement(ResumePDF, { data: resumeData })
    
    // Render the PDF document to buffer - cast to proper type
    const pdfBuffer = await renderToBuffer(resumeDocument as React.ReactElement<DocumentProps>)
    
    // Create filename with current date
    const currentDate = new Date().toISOString().split('T')[0]
    const filename = `TECHTUNE_IT_Solutions_Resume_${currentDate}.pdf`
    
    // Convert buffer to Uint8Array for NextResponse
    const pdfBytes = new Uint8Array(pdfBuffer)
    
    // Return PDF as downloadable file
    return new NextResponse(pdfBytes, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Content-Length': pdfBytes.length.toString(),
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    })
    
  } catch (error) {
    console.error('Error generating PDF resume:', error)
    
    // Return detailed error information for debugging
    return NextResponse.json(
      { 
        error: 'Failed to generate PDF resume',
        details: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString(),
        stack: error instanceof Error ? error.stack : undefined
      },
      { status: 500 }
    )
  }
}

// Optional: POST endpoint for resume data only (useful for previews)
export async function POST() {
  try {
    return NextResponse.json({
      data: resumeData,
      message: 'Resume data retrieved successfully',
      lastUpdated: new Date().toISOString(),
      version: '1.0.0'
    })
  } catch (error) {
    console.error('Error retrieving resume data:', error)
    return NextResponse.json(
      { error: 'Failed to retrieve resume data' },
      { status: 500 }
    )
  }
}