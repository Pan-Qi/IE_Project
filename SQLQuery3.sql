
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 10/10/2019 00:53:25
-- Generated from EDMX file: F:\IE_Project\YRSP\Models\CourseProviderModel.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [yrspnewSQL];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------


-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------


-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'CoursesSet'
CREATE TABLE [dbo].[CoursesSet] (
    [course_id] int IDENTITY(1,1) NOT NULL,
    [course_name] nvarchar(max)  NOT NULL,
    [course_type] nvarchar(max)  NOT NULL,
    [course_teaching_method] nvarchar(max)  NOT NULL,
    [course_level] nvarchar(max)  NOT NULL,
    [course_description] nvarchar(max)  NOT NULL,
    [course_link] nvarchar(max)  NOT NULL,
    [Course_Provider_provider_id] int  NOT NULL
);
GO

-- Creating table 'Course_ProviderSet'
CREATE TABLE [dbo].[Course_ProviderSet] (
    [provider_id] int IDENTITY(1,1) NOT NULL,
    [provider_name] nvarchar(max)  NOT NULL,
    [provider_website] nvarchar(max)  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [course_id] in table 'CoursesSet'
ALTER TABLE [dbo].[CoursesSet]
ADD CONSTRAINT [PK_CoursesSet]
    PRIMARY KEY CLUSTERED ([course_id] ASC);
GO

-- Creating primary key on [provider_id] in table 'Course_ProviderSet'
ALTER TABLE [dbo].[Course_ProviderSet]
ADD CONSTRAINT [PK_Course_ProviderSet]
    PRIMARY KEY CLUSTERED ([provider_id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [Course_Provider_provider_id] in table 'CoursesSet'
ALTER TABLE [dbo].[CoursesSet]
ADD CONSTRAINT [FK_CoursesCourse_Provider]
    FOREIGN KEY ([Course_Provider_provider_id])
    REFERENCES [dbo].[Course_ProviderSet]
        ([provider_id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_CoursesCourse_Provider'
CREATE INDEX [IX_FK_CoursesCourse_Provider]
ON [dbo].[CoursesSet]
    ([Course_Provider_provider_id]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------