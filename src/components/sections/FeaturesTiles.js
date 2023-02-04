import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: <p>How <span className="text-color-primary">Alpha Health</span> works</p>,
    paragraph: 'By leveraging data science, Alpha Health automatically extracts personalized clinical research data' + 
    'from medical journals, FDA databases, and clinical trial registries based on user profile, ' + 
    'including patient-specific (e.g. demographics, social behaviors, comorbidities), cancer-specific' +
    "(e.g. histologic type, grade, stage), and therapy-specific (e.g. surgery, radiotherapy, medical therapy)" +
    ' characteristics. Extracted clinical research data include survival data, adverse events, and regulatory status,' +
    ' which are synthesized into patient-centered information on personal prognosis, benefits and risks of therapies,' +
     'and access to specific therapies.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/stephen-dawson-qwtCeJ5cLYs-unsplash.jpg')}
                      alt="Features tile icon 01"
                      width={280}
                      height={280} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Health Insights
                    </h4>
                  <p className="m-0 text-sm">
                    Our dashboard will tell you the health insights after analyzing your profile and ongoing treatment combined with the latest scientific data, 
                    including your progression rate, metastasis rate, death rate, recover rate etc.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/nosiuol-pIVg7DPzNX0-unsplash.jpg')}
                      alt="Features tile icon 01"
                      width={280}
                      height={280} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Your risks
                    </h4>
                  <p className="m-0 text-sm">
                    We will tell you the risks you currently have such as complications from treatment, 
                    recurrence of the cancer, development of secondary cancers, and psychological effects
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/cdc-XLhDvfz0sUM-unsplash.jpg')}
                      alt="Features tile icon 01"
                      width={280}
                      height={280} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Clinical Trials
                    </h4>
                  <p className="m-0 text-sm">
                  Information on clinical trials that the you may be eligible to participate in. You will
                  access to experimental treatments that may not yet be available to the general public.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/roman-kraft-_Zua2hyvTBk-unsplash.jpg')}
                      alt="Features tile icon 01"
                      width={280}
                      height={280} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    In the news
                    </h4>
                  <p className="m-0 text-sm">
                    What's in the news about the dieases, therapies and treatments that you are concerned about. 
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/helena-lopes-PGnqT0rXWLs-unsplash.jpg')}
                      alt="Features tile icon 01"
                      width={280}
                      height={280} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    The Community 
                    </h4>
                  <p className="m-0 text-sm">
                  You will have access to communities that offer a supportive network of individuals who understand 
                  what patients and their families are going through, also provide information on topics 
                  such as treatment options, coping strategies, and financial assistance. 
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/christin-hume-0MoF-Fe0w0A-unsplash.jpg')}
                      alt="Features tile icon 01"
                      width={280}
                      height={280} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Newest Therapies
                    </h4>
                  <p className="m-0 text-sm">
                    Have early access to all latest therapies that might help with the diseases of concerns. 
                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;