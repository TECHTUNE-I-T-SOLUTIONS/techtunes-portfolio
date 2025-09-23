import React from 'react'
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'
import { ResumeData } from '../data/resumeData'

// Register fonts for better typography
// Font.register({
//   family: 'Inter',
//   src: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap'
// })

// Define styles for the PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 40,
    fontFamily: 'Helvetica',
    fontSize: 10,
    lineHeight: 1.4,
  },
  header: {
    marginBottom: 25,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#2563eb',
    borderBottomStyle: 'solid',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 5,
    fontFamily: 'Helvetica-Bold',
  },
  title: {
    fontSize: 14,
    color: '#2563eb',
    marginBottom: 12,
    fontWeight: 'bold',
    fontFamily: 'Helvetica-Bold',
  },
  contactInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  contactItem: {
    fontSize: 9,
    color: '#4b5563',
    marginBottom: 3,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 10,
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    borderBottomStyle: 'solid',
    fontFamily: 'Helvetica-Bold',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  summary: {
    fontSize: 10,
    lineHeight: 1.5,
    color: '#374151',
    textAlign: 'justify',
  },
  experienceItem: {
    marginBottom: 15,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1f2937',
    fontFamily: 'Helvetica-Bold',
  },
  company: {
    fontSize: 10,
    color: '#2563eb',
    fontWeight: 'bold',
    fontFamily: 'Helvetica-Bold',
  },
  period: {
    fontSize: 9,
    color: '#6b7280',
    fontStyle: 'italic',
  },
  location: {
    fontSize: 9,
    color: '#6b7280',
  },
  achievementsList: {
    marginTop: 5,
  },
  achievement: {
    fontSize: 9,
    color: '#374151',
    marginBottom: 3,
    paddingLeft: 10,
    lineHeight: 1.4,
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  skillCategory: {
    flex: 1,
    minWidth: 120,
    marginBottom: 10,
  },
  skillCategoryTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 5,
    fontFamily: 'Helvetica-Bold',
  },
  skillsList: {
    fontSize: 9,
    color: '#374151',
    lineHeight: 1.3,
  },
  projectItem: {
    marginBottom: 12,
  },
  projectName: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 3,
    fontFamily: 'Helvetica-Bold',
  },
  projectDescription: {
    fontSize: 9,
    color: '#374151',
    marginBottom: 3,
    lineHeight: 1.4,
  },
  projectTechnologies: {
    fontSize: 8,
    color: '#2563eb',
    fontStyle: 'italic',
    marginBottom: 3,
  },
  projectHighlights: {
    fontSize: 8,
    color: '#6b7280',
    lineHeight: 1.3,
  },
  serviceItem: {
    marginBottom: 10,
  },
  serviceTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1f2937',
    fontFamily: 'Helvetica-Bold',
  },
  serviceDescription: {
    fontSize: 9,
    color: '#374151',
    lineHeight: 1.4,
  },
  educationItem: {
    marginBottom: 10,
  },
  degree: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1f2937',
    fontFamily: 'Helvetica-Bold',
  },
  institution: {
    fontSize: 10,
    color: '#2563eb',
    fontWeight: 'bold',
    fontFamily: 'Helvetica-Bold',
  },
  certificationItem: {
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  certificationName: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#1f2937',
    flex: 1,
    fontFamily: 'Helvetica-Bold',
  },
  certificationDetails: {
    fontSize: 9,
    color: '#6b7280',
  },
  achievementItem: {
    marginBottom: 8,
  },
  achievementTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#1f2937',
    fontFamily: 'Helvetica-Bold',
  },
  achievementDescription: {
    fontSize: 9,
    color: '#374151',
    lineHeight: 1.4,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: 'center',
    fontSize: 8,
    color: '#9ca3af',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    borderTopStyle: 'solid',
    paddingTop: 10,
  },
  twoColumn: {
    flexDirection: 'row',
    gap: 20,
  },
  leftColumn: {
    flex: 1,
  },
  rightColumn: {
    flex: 1,
  },
  pageBreak: {
    pageBreakBefore: 'always',
  },
})

interface ResumePDFProps {
  data: ResumeData
}

export const ResumePDF: React.FC<ResumePDFProps> = ({ data }) => {
  const formatBulletPoint = (text: string) => `• ${text}`

  return (
    <Document
      title={`${data.personalInfo.name} - Resume`}
      author={data.personalInfo.name}
      subject="Professional Resume"
      keywords="resume, CV, professional, IT, software development"
    >
      {/* Page 1 */}
      <Page size="A4" style={styles.page}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.name}>{data.personalInfo.name}</Text>
          <Text style={styles.title}>{data.personalInfo.title}</Text>
          <View style={styles.contactInfo}>
            <Text style={styles.contactItem}>📧 {data.personalInfo.email}</Text>
            <Text style={styles.contactItem}>📞 {data.personalInfo.phone}</Text>
            <Text style={styles.contactItem}>🌐 {data.personalInfo.website}</Text>
            <Text style={styles.contactItem}>📍 {data.personalInfo.location}</Text>
            {data.personalInfo.linkedin && (
              <Text style={styles.contactItem}>🔗 LinkedIn</Text>
            )}
            {data.personalInfo.github && (
              <Text style={styles.contactItem}>⚡ GitHub</Text>
            )}
          </View>
        </View>

        {/* Professional Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          <Text style={styles.summary}>{data.summary}</Text>
        </View>

        {/* Core Services */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Core Services</Text>
          {data.services.map((service, index) => (
            <View key={index} style={styles.serviceItem}>
              <Text style={styles.serviceTitle}>{service.title}</Text>
              <Text style={styles.serviceDescription}>{service.description}</Text>
              <Text style={styles.projectTechnologies}>
                Technologies: {service.technologies.join(', ')}
              </Text>
            </View>
          ))}
        </View>

        {/* Technical Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technical Expertise</Text>
          <View style={styles.skillsGrid}>
            <View style={styles.skillCategory}>
              <Text style={styles.skillCategoryTitle}>Programming Languages</Text>
              <Text style={styles.skillsList}>{data.skills.technical.join(', ')}</Text>
            </View>
            <View style={styles.skillCategory}>
              <Text style={styles.skillCategoryTitle}>Frameworks & Libraries</Text>
              <Text style={styles.skillsList}>{data.skills.frameworks.join(', ')}</Text>
            </View>
            <View style={styles.skillCategory}>
              <Text style={styles.skillCategoryTitle}>Databases</Text>
              <Text style={styles.skillsList}>{data.skills.databases.join(', ')}</Text>
            </View>
            <View style={styles.skillCategory}>
              <Text style={styles.skillCategoryTitle}>Cloud & DevOps</Text>
              <Text style={styles.skillsList}>{data.skills.cloud.join(', ')}</Text>
            </View>
          </View>
        </View>

        {/* Professional Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Experience</Text>
          {data.experience.map((exp, index) => (
            <View key={index} style={styles.experienceItem}>
              <View style={styles.experienceHeader}>
                <View>
                  <Text style={styles.jobTitle}>{exp.title}</Text>
                  <Text style={styles.company}>{exp.company} • {exp.location}</Text>
                </View>
                <Text style={styles.period}>{exp.period}</Text>
              </View>
              <View style={styles.achievementsList}>
                {exp.achievements.map((achievement, achIndex) => (
                  <Text key={achIndex} style={styles.achievement}>
                    {formatBulletPoint(achievement)}
                  </Text>
                ))}
              </View>
              {exp.technologies && (
                <Text style={styles.projectTechnologies}>
                  Key Technologies: {exp.technologies.join(', ')}
                </Text>
              )}
            </View>
          ))}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text>
            Generated on {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })} • {data.personalInfo.name} • Page 1 of 2
          </Text>
        </View>
      </Page>

      {/* Page 2 */}
      <Page size="A4" style={styles.page}>
        {/* Key Projects */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Key Projects</Text>
          {data.projects.map((project, index) => (
            <View key={index} style={styles.projectItem}>
              <Text style={styles.projectName}>{project.name}</Text>
              <Text style={styles.projectDescription}>{project.description}</Text>
              <Text style={styles.projectTechnologies}>
                Technologies: {project.technologies.join(', ')}
              </Text>
              <View>
                {project.highlights.map((highlight, hIndex) => (
                  <Text key={hIndex} style={styles.projectHighlights}>
                    {formatBulletPoint(highlight)}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Education & Certifications in two columns */}
        <View style={styles.twoColumn}>
          <View style={styles.leftColumn}>
            <Text style={styles.sectionTitle}>Education</Text>
            {data.education.map((edu, index) => (
              <View key={index} style={styles.educationItem}>
                <Text style={styles.degree}>{edu.degree}</Text>
                <Text style={styles.institution}>{edu.institution}</Text>
                <Text style={styles.location}>{edu.location} • {edu.period}</Text>
                {edu.details && (
                  <View style={{ marginTop: 3 }}>
                    {edu.details.map((detail, dIndex) => (
                      <Text key={dIndex} style={styles.achievement}>
                        {formatBulletPoint(detail)}
                      </Text>
                    ))}
                  </View>
                )}
              </View>
            ))}
          </View>

          <View style={styles.rightColumn}>
            <Text style={styles.sectionTitle}>Certifications</Text>
            {data.certifications.map((cert, index) => (
              <View key={index} style={styles.certificationItem}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.certificationName}>{cert.name}</Text>
                  <Text style={styles.certificationDetails}>
                    {cert.issuer} • {cert.date}
                  </Text>
                  {cert.credentialId && (
                    <Text style={styles.certificationDetails}>
                      ID: {cert.credentialId}
                    </Text>
                  )}
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Achievements */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notable Achievements</Text>
          {data.achievements.map((achievement, index) => (
            <View key={index} style={styles.achievementItem}>
              <Text style={styles.achievementTitle}>
                {achievement.title} ({achievement.date})
              </Text>
              <Text style={styles.achievementDescription}>
                {achievement.description}
              </Text>
            </View>
          ))}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text>
            Generated on {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })} • {data.personalInfo.name} • Page 2 of 2
          </Text>
        </View>
      </Page>
    </Document>
  )
}